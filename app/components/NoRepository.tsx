import Norepo from "../assets/NoRepo.svg";

interface NoRepositoryProps {
  name: string;
}

const NoRepository: React.FC<NoRepositoryProps> = ({ name }) => {
  return (
    <section className="mt-8">
      <figure>
        <img src={Norepo} alt="no repository visual" />
      </figure>
      <p className="text-center text-blue-500 font-medium text-lg">
        {name} doesn't have a repository
      </p>
    </section>
  );
};

export default NoRepository;
