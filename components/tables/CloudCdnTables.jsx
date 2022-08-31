import Link from 'next/link'

export function CloudCDN() {
  return (
    <>
      <table className="min-w-full text-sm border-collapse divide-y divide-gray-200">
        <thead>
          <tr className="bg-neutral-200">
            <td rowSpan="2" className="px-10 py-4 text-sm font-semibold text-center select-none pl-9">
              Destination
            </td>
            <td
              colSpan="5"
              className="px-10 py-4 text-sm font-semibold text-center select-none pl-9 custom-left-border"
            >
              Price (per GB) by monthly usage
            </td>
          </tr>

          <tr className="bg-zinc-100">
            <th className="px-2 py-4 pl-2 text-xs ">5TB</th>
            <th className="cdn-custom-th ">50TB-100 TB</th>
            <th className="cdn-custom-th ">100TB-500TB</th>
            <th className="cdn-custom-th ">5TB-50 TB</th>
            <th className="cdn-custom-th ">500TB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cdn-custom-td custom-border">APAC (including Hong Kong)</td>
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
          <tr>
            <td className="cdn-custom-td custom-border">China</td>
            <td className="cdn-custom-td custom-border">0.09</td>
            <td className="cdn-custom-td custom-border">0.08</td>
            <td className="cdn-custom-td custom-border">0.075</td>
            <td className="cdn-custom-td custom-border">0.065</td>
            <td className="cdn-custom-td custom-border">
              <Link href="/contact-us">
                <a className="text-blue-700 underline">Contact Us</a>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border-b-0 cdn-custom-td custom-border">All other destinations</td>
            <td className="border-b-0 cdn-custom-td custom-border">0.05</td>
            <td className="border-b-0 cdn-custom-td custom-border">0.045</td>
            <td className="border-b-0 cdn-custom-td custom-border">0.04</td>
            <td className="border-b-0 cdn-custom-td custom-border">0.035</td>
            <td className="cdn-custom-td custom-border">
              <Link href="/contact-us">
                <a className="text-blue-700 underline">Contact Us</a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export function CloudOther() {
  return (
    <table className="min-w-full text-sm border-collapse divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-10 py-4 text-sm font-semibold text-left select-none pl-9">Item</th>
          <th className="px-10 py-4 text-sm font-semibold text-left select-none pl-9">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-zinc-100">
          <td className="px-6 py-4 pl-9">Cache Ingress</td>
          <td className="px-6 py-4 pl-9">
            $0.01 per GB <span className="text-xs">(Free for customer register before 31 Dec 2022)</span>{' '}
          </td>
        </tr>
        <tr className="odd:bg-zinc-100">
          <td className="px-6 py-4 pl-9">
            Cache Ingress <span className="text-xs">(From Gotipath Cloud)</span>
          </td>
          <td className="px-6 py-4 pl-9">Free</td>
        </tr>
        <tr className="odd:bg-zinc-100">
          <td className="px-6 py-4 pl-9"> HTTP/HTTPS Request</td>
          <td className="px-6 py-4 pl-9">
            $0.0075 per 10,000 requests <span className="text-xs">(Free for customer register before 31 Dec 2022)</span>
          </td>
        </tr>
        <tr className="odd:bg-zinc-100">
          <td className="px-6 py-4 pl-9">Enterprise API</td>
          <td className="px-6 py-4 pl-9"></td>
        </tr>
      </tbody>
    </table>
  )
}
