import { TestingComponent, TestingHook } from '../testing';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <TestingComponent color="blue" updatedColor="red" />
      <TestingHook />
    </>
  );
};

export default Home;