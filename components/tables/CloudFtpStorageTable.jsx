import Link from 'next/link'

export default function CloudFtpStorage() {
  return (
    <table className="min-w-full text-sm border-collapse">
      <thead>
        <tr className="bg-neutral-200">
          <th className="px-10 py-4">Classification</th>
          <th className="px-10 py-4">Billing Units</th>
          <th className="px-10 py-4">Usage Level</th>
          <th className="px-10 py-4">Pay-as-you-go</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2" className="text-center align-middle border-l-0 custom-td custom-border">
            Storage
          </td>
          <td rowSpan="2" className="text-center align-middle custom-td custom-border">
            GB
          </td>
          <td className="custom-td custom-border">0-1TB</td>
          <td className="custom-td custom-border">$0.03</td>
        </tr>
        <tr>
          <td className="custom-td custom-border">Over 1TB</td>
          <td className="custom-td custom-border ">$0.026</td>
        </tr>
        <tr className="">
          <td className="border-l-0 custom-td custom-border">HTTP/HTTPS Request</td>
          <td className="custom-td custom-border">per 1000 requests</td>
          <td className="custom-td custom-border">/</td>
          <td className="custom-td custom-border">FREE</td>
        </tr>
        <tr className="">
          <td className="border-l-0 custom-td custom-border">All data transfer in</td>
          <td className="custom-td custom-border">GB</td>
          <td className="custom-td custom-border">/</td>
          <td className="custom-td custom-border ">FREE</td>
        </tr>
        <tr className="">
          <td className="border-b-0 custom-td custom-border">Data transfer out</td>
          <td className="border-b-0 custom-td custom-border">GB</td>
          <td className="border-b-0 custom-td custom-border">CDN usage </td>
          <td className="custom-td custom-border ">
            <Link href="/pricing#content-delivery-network">
              <a className="text-blue-700 cursor-pointer">Check CDN Price</a>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
