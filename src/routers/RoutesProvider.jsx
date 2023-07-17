
import AuthProvider from "../context/auth/AuthProvider";
import RoutesAll from "./RoutesAll";

const RoutesProvider = () => {
  return (
    <AuthProvider>
        <RoutesAll />
    </AuthProvider>
  )
}

export default RoutesProvider