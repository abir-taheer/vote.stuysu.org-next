import Elections from "../../../models/elections";

export default (query, { url }) => Elections.findOne({ url });
