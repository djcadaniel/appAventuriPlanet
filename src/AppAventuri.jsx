import { AventuriProvider } from "./aventuri/context/AventuriProvider"
import { AppRouter} from "./routes"

export const AppAventuri = () => {
  return (
    <AventuriProvider>
      <AppRouter />
    </AventuriProvider>
  )
}