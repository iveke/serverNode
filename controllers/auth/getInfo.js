const getInfo = (req, res) => {
  const { _id, email, username } = req.user;
  res.json({ user: { email, username, _id } });
};

export default getInfo;
