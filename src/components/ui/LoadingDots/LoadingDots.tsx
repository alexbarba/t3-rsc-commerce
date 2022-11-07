import s from "./LoadingDots.module.css";

const LoadingDots: React.FC = () => {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-100/80 text-xs text-gray-800">
      <span className={s.loader}></span>
    </div>
  );
};

export default LoadingDots;
