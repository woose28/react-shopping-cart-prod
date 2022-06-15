import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchProductListThunk } from 'store/actions/product.action';
import { productSelector } from 'store/selector';

import useReduxState from 'hooks/useReduxState';

export default function useProductList() {
  const [productState, dispatch] = useReduxState(productSelector);
  const { isLoading, productList, pageCount } = productState;

  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        await dispatch(fetchProductListThunk(currentPage));
      } catch ({ message }) {
        alert(message);
      }
    };

    fetchProductList();
  }, [currentPage]);

  return { isLoading, productList, pageCount, currentPage };
}
