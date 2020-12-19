import withApollo from "../graphql/withApollo";

function Home() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default withApollo({ ssr: true })(Home);
