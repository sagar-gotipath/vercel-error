import Link from 'next/link'

export function MultiCdnTable() {
  return (
    <>
      <table className="min-w-full text-sm border-collapse divide-y divide-gray-200 ">
        <thead>
          <tr className="bg-neutral-200">
            <td rowSpan="2" className="px-10 py-4 text-sm font-semibold text-center cursor-pointer select-none pl-9">
              CDN
            </td>
            <td
              colSpan="5"
              className="px-10 py-4 text-sm font-semibold text-center cursor-pointer select-none pl-9 custom-left-border"
            >
              Price (per GB) by monthly usage
            </td>
          </tr>
          <tr className="bg-zinc-100">
            <th className="px-2 py-4 text-xs custom-left-border">10TB</th>
            <th className="cdn-custom-th custom-left-border">10TB-50 TB</th>
            <th className="cdn-custom-th custom-left-border">50TB-100 TB</th>
            <th className="cdn-custom-th custom-left-border">100TB-500TB</th>
            <th className="cdn-custom-th custom-left-border">500TB</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border-l-0 cdn-custom-td custom-border">Gotipath</td>
            <td className="cdn-custom-td custom-border">0.04</td>
            <td className="cdn-custom-td custom-border">0.035</td>
            <td className="cdn-custom-td custom-border">0.03</td>
            <td className="cdn-custom-td custom-border">0.025</td>
            <td className="cdn-custom-td custom-border">
              <Link href="/contact-us">
                <a className="text-blue-700 underline">Contact Us</a>
              </Link>
            </td>
          </tr>
          <tr className="">
            <td className="border-l-0 cdn-custom-td custom-border">G-Core Lab</td>
            <td className="cdn-custom-td custom-border">0.04</td>
            <td className="cdn-custom-td custom-border">0.035</td>
            <td className="cdn-custom-td custom-border">0.03</td>
            <td className="cdn-custom-td custom-border">0.025</td>
            <td className="cdn-custom-td custom-border">
              <Link href="/contact-us">
                <a className="text-blue-700 underline">Contact Us</a>
              </Link>
            </td>
          </tr>
          <tr className="">
            <td className="border-l-0 cdn-custom-td custom-border">Akamai</td>
            <td className="cdn-custom-td custom-border">0.045</td>
            <td className="cdn-custom-td custom-border">0.04</td>
            <td className="cdn-custom-td custom-border">0.035</td>
            <td className="cdn-custom-td custom-border">0.03</td>
            <td className="cdn-custom-td custom-border">
              <Link href="/contact-us">
                <a className="text-blue-700 underline">Contact Us</a>
              </Link>
            </td>
          </tr>
          <tr className="">
            <td className="border-l-0 cdn-custom-td custom-border">Cloudflare</td>
            <td className="px-10 py-4 text-center pl-9 custom-border bg-zinc-100" colSpan="5" rowSpan="3">
              Coming Soon
            </td>
          </tr>
          <tr className="">
            <td className="border-l-0 cdn-custom-td custom-border">Cloudfront</td>
          </tr>
          <tr>
            <td className="px-10 py-4 border-b-0 border-l-0 pl-9 custom-border">CDN Networks</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export function MultiOtherTable() {
  return (
    <>
      <table className="min-w-full text-sm border-collapse ">
        <thead>
          <tr>
            <th className="px-10 py-4 text-sm font-semibold text-left cursor-pointer select-none pl-9">Item</th>
            <th className="px-10 py-4 text-sm font-semibold text-left cursor-pointer select-none pl-9">Price </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-zinc-100">
            <td className="px-10 py-4 pl-9">Cache Ingress</td>
            <td className="px-10 py-4 pl-9">
              $0.01 per GB <span className="text-xs">(Free for customers to registered before 31 Dec 2022)</span>{' '}
            </td>
          </tr>
          <tr className="odd:bg-zinc-100">
            <td className="px-10 py-4 pl-9">Cache Ingress (From Gotipath Cloud)</td>
            <td className="px-10 py-4 pl-9">Free</td>
          </tr>
          <tr className="odd:bg-zinc-100">
            <td className="px-10 py-4 pl-9">HTTP/HTTPS Request</td>
            <td className="px-10 py-4 pl-9">$0.001 per 1,000 requests</td>
          </tr>
          <tr className="odd:bg-zinc-100">
            <td className="px-10 py-4 pl-9">Multi CDN Control Plane</td>
            <td className="px-10 py-4 pl-9">$49 per month</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
