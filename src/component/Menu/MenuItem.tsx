const MenuItem = ({ title }: { title: string }) => {
  return (
    <p className="secondary-text text-[18px] font-semibold uppercase max-w-[190px]">
      {title}
    </p>
  );
};

export default MenuItem;
