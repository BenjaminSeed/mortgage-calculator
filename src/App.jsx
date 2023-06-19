import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

// xs={12} and md={6} these are to make the screen responsive and change size accordingly
