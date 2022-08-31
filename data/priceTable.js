import cdnGp from './cloudCompute/cdn-gp'
import cdnPriceData from './cdnPriceData'
import cvmCo from './cloudCompute/cvm-co'

import blockStorage from './storage/blockStorage'
import CloudFtpStorage from '../components/tables/CloudFtpStorageTable'
import { CloudCDN, CloudOther } from '../components/tables/CloudCdnTables'
import { MultiCdnTable, MultiOtherTable } from '../components/tables/MultiCdnTables'
import VideoTranscoder from '../components/tables/VideoTranscoder'

export default [
  {
    // navigation title
    title: 'Cloud Compute',

    items: [
      {
        //price table section title
        title: 'General Purpose',
        // table price type
        tableType: 'primary',
        // price tables
        priceTables: [
          {
            // table header
            tableHeader: null,
            // price table
            table: cdnGp,
            // table footer
            footer: null,
          },
        ],
        // price table section description
        description: 'Virtual machine plans with balanced power and performance. <Learn More>',
        // price section id for scrolling to that exact section
        id: 'cdn-gp',
      },
      {
        title: 'Compute Optimized',
        tableType: 'primary',
        priceTables: [
          {
            tableHeader: null,
            table: cvmCo,
            footer: null,
          },
        ],
        description: 'Virtual machine plans for CPU-intensive applications <Learn More>',
        id: 'cdn-gp',
      },
    ],
    // map id for navigation
    id: 'cloud-compute',
    images: { inactive: '/images/icons/cloud-ia.png', active: '/images/icons/cloud.png' },
  },
  {
    title: 'containers',
    items: [
      {
        title: 'Gotipath Kubernetes Service',
        tableType: 'primary',
        priceTables: [],
        description:
          'GKS pricing includes the resources you consume – CVM, Load Balancers, and Volumes and a $30 per month for control plane. <Learn More>',
        id: 'container-gks',
      },
      {
        title: 'Managed Rancher',
        priceTables: [],
        tableType: 'primary',
        description:
          'Rancher, the open-source multi-cluster orchestration platform, lets operations teams deploy, manage and secure enterprise Kubernetes. It comes free with your GKS susbcription',
        id: 'container-rancher',
      },
    ],
    id: 'containers',
    images: { inactive: '/images/icons/container-ia.png', active: '/images/icons/container.png' },
  },
  {
    title: 'storage',
    items: [
      {
        title: 'Block Storage',
        tableType: 'primary',
        priceTables: [
          {
            tableHeader: null,
            table: blockStorage,
            footer: null,
          },
        ],
        description: 'Increase storage capacity by attaching high-speed volumes.',
        id: 'block-storage',
      },
      {
        title: 'Cloud FTP Storage',
        tableType: 'custom',
        priceTables: [
          {
            tableHeader: null,
            table: <CloudFtpStorage />,
            footer: null,
          },
        ],
        description: 'Simple ftp storage to save and check any type of data with a built in CDN',
        id: 'cloud-ftp-storage',
      },
    ],
    id: 'storage',
    images: { inactive: '/images/icons/storage-ia.png', active: '/images/icons/storage.png' },
  },
  {
    title: 'network',
    items: [
      {
        title: 'bare metal',
        tableType: 'primary',
        priceTables: [],
        description: 'Easy-to-use, affordable VMs for many common workloads.',
        id: 'bare-metal',
      },
    ],
    id: 'network',
    images: { inactive: '/images/icons/network-ia.png', active: '/images/icons/network.png' },
  },
  {
    title: 'Content Delivery Network',
    items: [
      {
        title: 'Cloud CDN',
        tableType: 'custom',
        priceTables: [
          {
            tableHeader: 'Cache Egress',
            table: <CloudCDN />,
            footer: null,
          },
          {
            tableHeader: 'Other Charges',
            table: <CloudOther />,
            footer: null,
          },
        ],
        description: '',
        id: 'cloud-CDN',
      },
      {
        title: 'Multi CDN',
        tableType: 'custom',
        priceTables: [
          {
            tableHeader: 'Cache Egress',
            table: <MultiCdnTable />,
            footer: 'Serving to China with Multi CDN needs a manual setup. Contact us to learn more.',
          },
          {
            tableHeader: 'Other Charges',
            table: <MultiOtherTable />,
            footer: null,
          },
        ],
        description: "Experience combination of  existing CDN's into one large global network and ensure 100% uptime",
        id: 'multy-CDN',
      },
    ],
    id: 'content-delivery-network',
    images: { inactive: '/images/icons/cdn-ia.png', active: '/images/icons/cdn.png' },
  },
  {
    title: 'media cloud',
    items: [
      {
        title: 'Cloud Video Transcoder',
        tableType: 'custom',
        priceTables: [
          {
            tableHeader: null,
            table: <VideoTranscoder />,
            footer: null,
          },
        ],
        description: 'Cloud video transcoding service with enterprise-grade API’s',
        id: 'cloud-video-transcoder',
      },
    ],
    id: 'media-cloud',
    images: { inactive: '/images/icons/mediaCloud-ia.png', active: '/images/icons/mediaCloud.png' },
  },
]
