import Cookies from "js-cookie";

export default function CheckPermission() {
  return !(Cookies.get("token") == null);
}
