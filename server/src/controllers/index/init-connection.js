const getIndexService = async (req, res) => {
  res.status(200).send({
    message: "Connection successful",
    data: null,
    error: null,
  })
}

export default getIndexService
