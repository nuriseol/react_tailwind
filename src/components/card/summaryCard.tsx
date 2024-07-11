const SummaryCard = () => {
  const today = new Date()
  console.log(today);

  return (
    <div className="col-span-12 bg-gradient-to-r from-e_green to-e_blue p-7.5 shadow-default dark:bg-boxdark xl:col-span-4 rounded">
      <p>{new Date().toLocaleDateString()}
      {new Date().toLocaleTimeString()}
      </p>
      {/* <div className="bg-white w-full rounded"></div> */}
    </div>
  )
}

export default SummaryCard;