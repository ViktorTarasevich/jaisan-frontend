import * as React from "react";
import {
    CartIcon,
    FavoriteIcon
} from "../../assets/icons";
import {
    CartButton, FavoriteButton,
    RowButtonWrapper,
    RowSelectedText,
    RowSelectedTextWrapper,
    RowSelectedWrapper
} from "../../styledComponents/table-footer";

export const TableFooter = ({product ,selectedRowsId, sum}) => {
    return(
        <RowSelectedWrapper>
            <RowSelectedTextWrapper>
                <RowSelectedText>Товаров выбрано: {selectedRowsId} шт.</RowSelectedText>
                <RowSelectedText>Сумма всего: {sum} BYN</RowSelectedText>
            </RowSelectedTextWrapper>
            <RowButtonWrapper>
                <CartButton>
                    В корзину
                    <CartIcon bg='none' color='#EE7500' size={38}/>
                </CartButton>
                <FavoriteButton>
                    <FavoriteIcon bg='none' color='#EE7500' size={38}/>
                </FavoriteButton>
            </RowButtonWrapper>
        </RowSelectedWrapper>
    );
};