import axios from 'axios';
import { routesFront } from '@/config/index';

const sendSravniRequest = async (click_id) => {
  try {
    const sravniRes = await axios.get(
      `https://sravni.go2cloud.org/aff_lsr?offer_id=2450&transaction_id=${click_id}`
    );
    console.log("Sravni request successful:", sravniRes.data);
  } catch (error) {
    console.error("Error in Sravni request:", error);
  }
};

const hitContactRoute = async (values) => {
  try {
    const res = await axios.post(`${routesFront.root}/api/contact`, values);
    let output;

    res.status === 200 && (output = 200);
    res.status === 500 && (output = 500);

    if (output === 200 && values.click_id) {
      await sendSravniRequest(values.click_id);
    }

    return output;
  } catch (err) {
    console.error("Error in contact request:", err);
    return err;
  }
};

export default hitContactRoute;