import Link from 'next/link'

export default function ScheduleButton(props) {
  return (
    <Link href={props.href.url}>
      <a className="px-10 py-1.5 font-semibold border-[1px] rounded-sm ">
        <span className="flex items-center justify-center">
          <span className="flex">
            <img src={props.image1.url} alt="meeting person 1" className="" />
            <img src={props.image2.url} alt="meeting person 2" className="relative z-10 right-2.5" />
          </span>
          <span className="text-sm text-white capitalize">{props.label}</span>
        </span>
      </a>
    </Link>
  )
}
