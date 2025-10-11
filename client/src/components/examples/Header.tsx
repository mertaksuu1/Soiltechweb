import { Header } from "../Header";

export default function HeaderExample() {
  return (
    <Header 
      activeSection="anasayfa" 
      onNavigate={(section) => console.log("Navigate to:", section)} 
    />
  );
}
