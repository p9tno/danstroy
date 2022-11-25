jQuery(function($){

    $(document).ready(function(){
        calcTable();
    });

    function calcTable() {
        let table = $('.js-calc-table');
        let bottom = $('.js-calc-table-bottom');
        let rezult = $('.js-calc-table-result');
        let btn_to_top = $('.toTop');
        let total;

        // bottom.hide();
        table.on('change', 'input[type=number]', function() {
            calc();
            // console.log('change');
        });


        function calc() {
            total = 0;

            table.find('[type=number]').each(function(index, el) {

                let price = $(el).closest('.table__row').find('[data-price]');
                let val = +$(el).val();
                let summ = +(+price.data('price')*val).toFixed();

                if (summ > 0) {
                    price.text(thousandSeparator(summ) + ' РУБ.');
                    total += summ;
                } else {
                    $(el).val('');
                    // $(el).val(0);
                    price.text('');
                }

            });

            if (total > 0) {
                chowRezult();
            } else {
                // bottom.hide();
                bottom.removeClass('calc__bottom_show');
                btn_to_top.removeClass('calc_active');
            }

        }

        function chowRezult() {
            // bottom.show();

            bottom.addClass('calc__bottom_show');
            btn_to_top.addClass('calc_active');

            $('[name="calc-sum"]').val(total);
            rezult.html(`<p class="desktop">Итоговая стоимость выбранных работ — &nbsp</p> <b>${thousandSeparator(total)}</b><p>&nbsp РУБ</p>`);
        }

        function thousandSeparator(str) {
            var parts = (str + '').split('.'),
                main = parts[0],
                len = main.length,
                output = '',
                i = len - 1;

            while(i >= 0) {
                output = main.charAt(i) + output;
                if ((len - i) % 3 === 0 && i > 0) {
                    output = ' ' + output;
                }
                --i;
            }

            if (parts.length > 1) {
                output += '.' + parts[1];
            }
            return output;
        };
    }

    function initQuantity() {
        $(document.body).on('click', 'button.quantity_minus, button.quantity_plus', function() {

            let qty = $(this).parent().find( 'input' );

            let	val = parseInt( qty.val() );
            let	min = parseInt( qty.attr( 'min' ) );
            let	max = parseInt( qty.attr( 'max' ) );
            let	step = parseInt( qty.attr( 'step' ) );

            if (!val) {
                val = 0;
            }

            if ( $( this ).is( '.quantity_plus' ) ) {
                if ( max && ( max <= val ) ) {
                    qty.val( max );
                } else {
                    qty.val( val + step );
                    $('.number_shipments_js').change();

                }

            } else {
                if ( min && ( min >= val ) ) {
                    qty.val( min );
                } else if ( val > 0 ) {
                    qty.val( val - step );
                    $('.number_shipments_js').change();

                }
            }

        });
    }
    initQuantity();

    // $('.number_shipments_js').on('input', function() {
    //   $(this).val((i, v) => Math.max(this.min, Math.min(this.max, v)));
    // });


});
