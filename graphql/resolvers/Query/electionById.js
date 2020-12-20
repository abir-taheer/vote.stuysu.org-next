import Elections from "../../../models/elections";

export default (query, { id }) => Elections.findById(id);
