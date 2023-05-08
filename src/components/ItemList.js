import React, { useState, useEffect } from 'react';
import Item from './Item';

const mockData = [
  {id: 2, title: 'Processador AMD Ryzen 5 5500', buttonLabel: 'Detalhes', price: 'R$: 700,00', stock: '430', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-5500-36ghz-42ghz-turbo-6-cores-12-threads-cooler-wraith-stealth-am4-100-100000457box_138946.jpg', category: 'Hardware',subCategory: 'Processadores',description: '3.6GHz (4.2GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, Sem Vídeo Integrado, 100-100000457BOX'},
  {id: 5, title: 'Placa Mãe Asus ROG Strix X670E-A Gaming WIFI', buttonLabel: 'Detalhes', price: 'R$: 3.000,00', stock: '235', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/placa-mae-asus-rog-strix-x670e-a-gaming-wifi-chipset-x670-amd-am5-atx-ddr5-90mb1bm0-m0eay0_155824.jpg', category: 'Hardware',subCategory: 'Placa-mãe',description: 'Chipset X670, AMD AM5, ATX, DDR5, 90MB1BM0-M0EAY0'},
  {id: 3, title: 'Monitor ASRock Phantom Gaming PG27FF1A', buttonLabel: 'Detalhes', price: 'R$: 1.500,00', stock: '354', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/monitor-asrock-phantom-gaming-27-pol-full-hd-1ms-165hz-ips-hdr-freesync-hdmidp_163149.jpg', category: 'Monitor',subCategory: 'Full HD',description: '27 Pol, Full HD, 1ms, 165Hz, IPS, HDR, FreeSync, HDMI/DP'},
  {id: 4, title: 'Monitor VX PRO', buttonLabel: 'Detalhes', price: 'R$: 450,00', stock: '234', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/monitor-vx-pro-195-pol-hd-60hz-hdmivga-vx195z-pro_160395.jpg', category: 'Monitor',subCategory: 'HD',description: '19.5 Pol, HD, 60Hz, HDMI/VGA, VX195Z PRO'},
  {id: 6, title: 'Suporte de Mesa ELG', buttonLabel: 'Detalhes', price: 'R$: 260,00', stock: '534', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/suporte-de-mesa-elg-ergonomico-multiarticulado-com-pistao-para-monitores-de-22-a-35-fh80n_162750.jpg', category: 'Acessórios',subCategory: 'Suporte',description: 'Ergonômico, Multiarticulado, Com Pistão, Para Monitores de 22" a 35", FH80N'},
  {id: 1, title: 'Headset Gamer SuperFrame Odin', buttonLabel: 'Detalhes', price: 'R$: 120,00', stock: '2355', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/headset-gamer-superframe-odin-drivers-de-50mm-71-surround-usb-black_159118.jpg', category: 'Acessórios',subCategory: 'Headset',description: 'Drivers De 50mm, 7.1 Surround, USB, Black'},
  {id: 7, title: 'Teclado Mecânico Gamer Gamdias Hermes E2 Led Blue', buttonLabel: 'Detalhes', price: 'R$: 130,00', stock: '342', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/teclado-mecanico-gamer-gamdias-hermes-e2-led-blue-switch-red-abnt2-hermes-e2-blue-brred_133680.jpg', category: 'Periféricos',subCategory: 'Teclados',description: 'Switch Red, ABNT2, HERMES E2 BLUE BR/RED'},
  {id: 8, title: 'Mouse Gamer SuperFrame', buttonLabel: 'Detalhes', price: 'R$: 80', stock: '2345', pictureUrl: 'https://img.terabyteshop.com.br/produto/g/mouse-gamer-superframe-boss-10000-dpi-rgb-7-botoes-black_105211.jpg', category: 'Periféricos',subCategory: 'Mouses',description: 'BOSS, 10000 DPI, RGB, 7 Botões, Black, Sensor Pixart 3325'}
];

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      return mockData;
    };

    fetchItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Item key={item.id} id={item.id} title={item.title} buttonLabel={item.buttonLabel} price={item.price} pictureUrl={item.pictureUrl}/>
      ))}
    </div>
  );
}

export default ItemList;
export { mockData };
