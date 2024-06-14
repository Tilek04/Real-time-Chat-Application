export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.error(error);
  }
};

export const login = (req, res) => {
  console.log("LoginUser");
};

export const logout = (req, res) => {
  console.log("LogutUser");
};
