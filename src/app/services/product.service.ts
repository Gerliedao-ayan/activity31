import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [
    {
      price: 24990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a556elbcphl/gallery/ph-galaxy-a55-5g-sm-a556-sm-a556elbcphl-thumb-540211701?$172_172_PNG$',
      name: 'Galaxy A55 5G',
      description:
        '6.6" FHD+ Super AMOLED adaptive 120Hz display1\n' +
        '50MP wide-angle camera with OIS, VDIS2,3\n' +
        '5,000mAh (typical) more than 2 days battery4,5'
,
}

,
{
  price: 20990.00,
    image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a356ezygphl/gallery/ph-galaxy-a35-5g-sm-a356-498581-sm-a356ezygphl-thumb-543991990?$172_172_PNG$',
      name: 'Galaxy A35 5G',
      description:
        'Superior Camera Experience\n' +
        'Enhanced Design & Form Factor\n' +
        'Super Fast & Seamless Performance',
    },
    {
      price: 65990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/2407/gallery/ph-galaxy-zflip6-f741-513538-sm-f741blbaphl-thumb-542349554?$172_172_PNG$',
      name: 'Galaxy Z Flip6',
      description:
        'Capture your best angle hands-free with auto zoom\n' +
        'Your communicative companion for multilingual conversations\n' +
        'New floating edge design is slim, sleek and stunning',
    },
    {
      price: 48591.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-s721blghphl/gallery/ph-galaxy-s24-fe-s721-sm-s721blghphl-thumb-543522437?$172_172_PNG$',
      name: 'Galaxy S24 FE',
      description:
        'Ultimate Premium Fold Design\n' +
        'AI-Powered Life Productivity\n' +
        'Unmatched Gaming',
    },
    {
      price: 122990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-f956bzwhphl/gallery/ph-galaxy-z-fold6-f956-sm-f956bzwhphl-thumb-542629766?$172_172_PNG$',
      name: 'Galaxy Z Fold6 (Online Exclusive)',
      description:
        'The most efficient way to search on a smartphone\n' +
        'The thinnest, lightest design\n' +
        'The most powerful processor on Samsung Galaxy',
    },
    {
      price: 65990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-f741bakaphl/gallery/ph-galaxy-zflip6-f741-sm-f741bakaphl-thumb-542631291?$172_172_PNG$',
      name: 'Galaxy Z Flip6 (Online Exclusive)',
      description:
        'Capture your best angle hands-free with auto zoom\n' +
        'Your communicative companion for multilingual conversations\n' +
        'New floating edge design is slim, sleek and stunning',
    },
    {
      price: 24.99,
      image:
        'https://imgs.search.brave.com/nkdRConECdn603nlhwMe2Jgb64YltWF42ywrJWI0Gyk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MTcvMjE5OS80NDMy/L3Byb2R1Y3RzL0Ez/OTkzMDExX05vaXNl/X0NhbmNlbGxpbmdf/RWFyYnVkc19URDAx/X1YxXzEuanBnP3Y9/MTcxMTAxMDQwMg',
      name: 'Noise Cancelling Earbuds',
      description:
        'Compact earbuds with active noise cancellation and long battery life for immersive sound.',
    },
    {
      price: 106990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-490240-sm-s928blbwphl-thumb-539386593?$172_172_PNG$',
      name: 'Galaxy S24 Ultra (Online Exclusive)',
      description:
        'Industry-leading hardware meets world-changing AI\n' +
        'Made with titanium. Built to last\n' +
        '200MP high-resolution photography & hyper',
    },
    {
      price: 76990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-plus-489220-sm-s926blbcphl-thumb-539320472?$172_172_PNG$',
      name: 'Galaxy S24+ (Online Exclusive)',
      description:
        'Setting the new standard of mobile, now with Galaxy AI\n' +
        'Shrunken bezels & satin-finished aluminum\n' +
        'Space Zoom for pixel-perfect portraits & power',
    },
    {
      price: 61990.00,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-sm-s921bzyqphl-thumb-539300758?$172_172_PNG$',
      name: 'Galaxy S24',
      description:
        'Setting the new standard of mobile, now with Galaxy AI\n' +
        'Shrunken bezels & satin-finished aluminum\n' +
        'Space Zoom for pixel-perfect portraits & power',
    },
  ];

  getProductList() {
    return this.productList;
  }
}
