export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-pulse" />
      <p className="opacity-0 group-hover:opacity-90 tracking-widest ">
        {title}
      </p>
    </div>
  );
}
