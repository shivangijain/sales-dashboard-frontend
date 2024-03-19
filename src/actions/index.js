import { ROOT_URL } from "../constant.js";

export const getStateList = async () => {
  try {
    const response = await fetch(`${ROOT_URL}/api/state-list`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDashboardData = async (state, fromDate, toDate) => {
  try {
    const response = await fetch(
      `${ROOT_URL}/api/dashboard-data?state=${state}&fromDate=${fromDate}&toDate=${toDate}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
};
