import axios from "axios";

// const [data, setData] = useState([]);
// useEffect(() => {
//   axios.get(`http://localhost:4000/comments`).then((res) => {
//     console.log(res.data);
//     setData(res.data);
//   });
// }, []);

export const getComments = async () => {
  const response = await axios.get(`http://localhost:4000/comments`);
  return response.data;
};
