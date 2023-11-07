import { HomeForm } from "../components/Form";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <HomeForm />
    </div>
  );
}
