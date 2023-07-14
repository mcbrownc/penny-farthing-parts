import DirectoryItem from '../directory-item/directory-item.component'; 

import { DirectoryItemContainer } from './directory.styles';

const categories = [
  {
    "id": 1,
    "title": "Derailleurs",
    "imageUrl": "https://cdn11.bigcommerce.com/s-81z82onll7/images/stencil/1280x1280/products/3076/1464/P1080173__97325.1531099760.jpg?c=2",
    "route": 'shop/derailleurs',
  },
  {
    "id": 2,
    "title": "Stems",
    "imageUrl": "https://aroundthecycle.com/cdn/shop/products/DSC_0005_fc268dea-7984-4bbe-ae24-73fb06533c09.jpg?v=1677282327&width=1946",
    "route": 'shop/stems',
  },
  {
    "id": 3,
    "title": "Handlebars",
    "imageUrl": "https://www.solebicycles.com/cdn/shop/products/Product_-_2020_x_1314_0007s_0001_Classic_Chrome_Solo_9155_1445x.jpg?v=1626980666",
    "route": 'shop/handlebars',
  },
  {
    "id": 4,
    "title": "Brakes",
    "imageUrl": "https://cycling-obsession.com/wp-content/uploads/2020/04/IMG_7360.jpg",
    "route": 'shop/brakes',
  },
  {
    "id": 5,
    "title": "Cranksets",
    "imageUrl": "https://www.retro-gression.com/cdn/shop/products/IMG_0608.jpg?v=1594418845",
    "route": 'shop/cranksets',
  }
];

const Directory = () => {
  return (
    <DirectoryItemContainer>
    {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      )
    )}
  </DirectoryItemContainer>
  )
}

export default Directory;