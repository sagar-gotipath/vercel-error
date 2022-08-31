export default function VideoTranscoder() {
  return (
    <table className="min-w-full text-sm border-collapse divide-y divide-neutral-200">
      <thead>
        <tr className="bg-neutral-200">
          <th className="video-transcoder-th">Output media type</th>
          <th className="video-transcoder-th">Billing Units</th>
          <th className="video-transcoder-th">Usage Level</th>
          <th className="video-transcoder-th">Pay-as-you-go (USD)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2" className="border-b-0 border-l-0 video-transcoder-td custom-border">
            Audio,SD.HD, FHD, UHD
          </td>
          <td rowSpan="2" className="border-b-0 border-l-0 video-transcoder-td custom-border">
            per output minutes
          </td>
          <td className="video-transcoder-td custom-border ">1-5000 minute</td>
          <td className="video-transcoder-td custom-border ">Over 5000 minute</td>
        </tr>
        <tr>
          <td className="border-b-0 video-transcoder-td custom-border">$0.0065</td>
          <td className="video-transcoder-td custom-border">$0.005</td>
        </tr>
      </tbody>
    </table>
  )
}
