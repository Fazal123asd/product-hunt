import styles from './index.module.scss';

export function Index(props) {
const {data} = props
console.log(data.results)
  return (
    <div >
   {data.results.map(val=><li>{val.name}</li>)}
    </div>
  );
}

export default Index;

export async function getServerSideProps() {
 const res = await fetch(`https://rickandmortyapi.com/api/character/`)
  const data = await res.json()
  if (!data) {
    return <p>Loading...</p>;
  }
  // Pass data to the page via props
  return { props: {
    data: data
  }
  }
}