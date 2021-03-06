const Delivery = () => {
    return(
        <div className='delivery'>
            <div className='container'>
                <div className='delivery__title'> <i class="fas fa-truck"></i> Доставка</div>
                <div className='delivery__block'>
                    <div className='delivery__texts'>
                        <div className='delivery__text'>Мы работаем в Санкт-Петербурге ежедневно и круглосуточно.</div>
                        <div className='delivery__text'>Мы принимаем заказы на любую сумму, но предлагаем вам оплатить доставку: всего 99 рублей.   Это условие позволяет нам придерживаться выбранного курса: делать всё, чтобы вы наслаждались вкусной едой от PLANET PIZZA по невероятно низким ценам. Мы не хитрим, не навязываем и не гонимся за скоростями, предлагая вам вкусную еду на честных условиях.
                        </div>
                        <div className='delivery__text'>Время доставки еды по Санкт-Петербургу – от 30 минут, максимальное время уточняйте у оператора при заказе. Оплатить заказ вы можете при получении наличными или банковской картой, возможность оплаты банковской картой также необходимо уточнить у оператора при подтверждении заказа.
                        </div>
                    </div>
                
                    <div className='delivery__map'>
                        <iframe src="https://yandex.ru/map-widget/v1/-/CCUafMhl3A" width="760" height="500" frameborder="0" allowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Delivery;