import Link from "next/link";
const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <div className="main-container">
        <Link href="/dashboard">
          <a>Voltar para o Dashboard</a>
        </Link>
      </div>
    </>
  );
};
export default IndexPage;
