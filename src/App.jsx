

//import './App.css'
import Router from './router';
import { ThemeProvider } from '@mui/material/styles';
import  temita from "./theme";
function App() {
  
  return (
    <ThemeProvider theme={temita} >
      <Router/>
    </ThemeProvider>
  )
}

export default App
