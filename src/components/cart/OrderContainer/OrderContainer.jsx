import React from 'react';

import useCart from 'hooks/useCart';

import { Button } from 'components/common';

import * as S from 'components/cart/OrderContainer/OrderContainer.style';

function OrderContainer() {
  const { checkedProductCount, totalPrice } = useCart();

  return (
    <S.Container>
      <S.Title>결제예상금액</S.Title>
      <S.Content>
        <S.ExpectedPriceWrapper>
          <S.Label>결제예상금액</S.Label>
          <S.Price>{totalPrice.toLocaleString('ko-KR')} 원</S.Price>
        </S.ExpectedPriceWrapper>
        <Button disabled={checkedProductCount === 0}>
          주문하기 ({checkedProductCount}개)
        </Button>
      </S.Content>
    </S.Container>
  );
}

export default OrderContainer;
