export default function TeamCard({ children, imgSrc, ...props }) {
  return (
    <div
      {...props}
      className="relative max-w-xs overflow-hidden rounded-3xl shadow-lg group  cursor-pointer"
    >
      <img
        src={imgSrc}
        alt=""
        className="transition-transform group-hover:scale-105 duration-700 w-[306px] h-[353px]"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  );
}
