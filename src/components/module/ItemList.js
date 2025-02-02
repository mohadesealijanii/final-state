function ItemList({ data }) {
  return (
    <>
      {data.length ? (
        <ul>
          {data.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است.</p>
      )}
    </>
  )
}

export default ItemList
