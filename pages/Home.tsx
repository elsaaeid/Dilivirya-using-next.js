import React, { useState } from 'react';
import { IncomeContent } from "../components/IncomeContent";
import { MultiCardsOverview } from "../components/MultiCardsOverview";
import { OffersContent } from "../components/OffersContent";
import { ClientsContent } from "../components/ClientsContent";
import { ProductsContent } from "../components/ProductsContent";
import { OrdersContent } from "../components/OrdersContent";
import { ViewsContent } from "../components/ViewsContent";

export const Home = () => {
    const cards = [
        {
            id: 'cardOrders',
            icon: <i className='bx bxs-detail'></i>,
            title: 'Orders count',
            text: <>Total Orders :<span className="countOrders">252</span> <span className="upPer">+34% <i className='bx bx-up-arrow-alt'></i></span></>,
            last: 'Last week : 200',
        },
        {
            id: 'cardOffers',
            icon: <i className='bx bxs-purchase-tag'></i>,
            title: 'Offers count',
            text: <>Total offers :<span className="countOrders">252</span></>,
            last: 'Last week : 200',
        },
        {
            id: 'cardViews',
            icon: <i className="bi bi-eye-fill"></i>,
            title: 'Story views',
            text: <>Total views :<span className="countOrders">252</span> <span className="upPer">+34% <i className='bx bx-up-arrow-alt'></i></span></>,
            last: 'Last week : 200',
        },
        {
            id: 'cardClients',
            icon: <i className="bi bi-people-fill"></i>,
            title: 'Clients count',
            text: <>Total Clients :<span className="countOrders">252</span> <span className="upPer">+34% <i className='bx bx-up-arrow-alt'></i></span></>,
            last: 'Last week : 200',
        },
        {
            id: 'cardProducts',
            icon: <i className="bi bi-columns-gap"></i>,
            title: 'Products count',
            text: <>Total product :<span className="countOrders">252</span></>,
            last: 'Last week : 200',
        },
    ];
      const [active, setActive] = useState(cards[0].id);
  return (
    <>
      <IncomeContent />
      <MultiCardsOverview cards={cards} active={active} setActive={setActive} />
      <div className="overview-content-detail mt-3">
          {active === 'cardOrders' && <OrdersContent />}
          {active === 'cardOffers' && <OffersContent />}
          {active === 'cardViews' && <ViewsContent />}
          {active === 'cardClients' && <ClientsContent />}
          {active === 'cardProducts' && <ProductsContent />}
      </div>
    </>
  )
}
