import { request, gql } from "graphql-request";
import { reverseString } from "./utils";

const COUNTRY_QUERY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      name
      capital
      states {
        name
      }
    }
  }
`;

interface State {
  name: string;
}

interface Country {
  name: string;
  capital: string;
  states: State[];
}

interface Response {
  country: Country;
}

export const getCountryById = async (req, res) => {
  const { id } = req.params;
  const result: Response = await request(
    "https://countries.trevorblades.com/graphql",
    COUNTRY_QUERY,
    { code: id }
  );

  if (!result.country) {
    res.status(404).send("Country not found");
  } else {
    const response = {
      ...result.country,
      states: result.country?.states
        .map((state) => reverseString(state.name))
        .join(", "),
    };
    res.json(response);
  }
};
