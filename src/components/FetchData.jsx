async function getData() {
  const res = await fetch("http://192.168.0.157:8000/books");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const FetchData = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="mx-10">
      <h1>All Books </h1>
      <div className="grid grid-cols-5 gap-7">
        {data.books.map((d) => (
          <div className="bg-white shadow-lg flex flex-col items-center">
            <img className="w-20 " src={d.image_url} alt="" />
            <h1>{d.name}</h1>
            <h1>{d.author}</h1>
            <h1>{d.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
