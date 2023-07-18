import {FC} from "react";
import * as Yup from 'yup';
import {Container} from "../layout/container";
import cn                        from 'classnames';
import s                         from './Order.module.scss';
import {Field, Form, Formik, ErrorMessage} from "formik";
import {PatternFormat} from "react-number-format";

export const Order:FC = () => {

    const submitOrderHandler = (val) => console.debug('Order submit',{val});

    const validationSchema = Yup.object(
        {
            fio: Yup.string().required('Заполните имя'),
            address: Yup.string().required('Заполните адрес'),
            phone: Yup.string().required('Заполните контактный телефон'),
            email: Yup.string().email('введена не валидная почта').required('Заполните имя'),
            delivery: Yup.string().required('Выберите способ доставки'),
        }
    )

    return (
        <section>
            <Container >
                <h2 className={s.title}> Оформление заказа</h2>
                <Formik
                    initialValues={
                        {
                            fio: 'Mass',
                            address: '',
                            phone: '',
                            email: '',
                            delivery: 'self'
                        }
                    }
                    onSubmit={submitOrderHandler}
                    validationSchema={validationSchema}
                >
                    <Form className={s.form}>
                        <fieldset className={s.personal}>
                            <label className={s.label}>
                                <Field className={s.input}
                                       type={'text'}
                                       placeholder={'ФИО*'}
                                       name={'fio'}
                                />
                                <ErrorMessage className={s.error}
                                              name={'fio'}
                                              componet={'span'}
                                />
                            </label>
                            <label className={s.label}>
                                <Field className={s.input}
                                       type={'text'}
                                       placeholder={'Адрес доставки'}
                                       name={'address'}
                                />
                                <ErrorMessage className={s.error}
                                              name={'address'}
                                              componet={'span'}
                                />
                            </label>
                            <label className={s.label}>
                                <Field as={PatternFormat}
                                       className={s.input}
                                      format={'+7(###)###-##-##'}
                                       placeholder={'телефон'}
                                       name={'phone'}
                                />
                                <ErrorMessage className={s.error}
                                              name={'phone'}
                                              componet={'span'}
                                />
                            </label>
                            <label className={s.label}>
                                <Field className={s.input}
                                       type={'text'}
                                       placeholder={'e-mail'}
                                       name={'email'}
                                />
                                <ErrorMessage className={s.error}
                                              name={'email'}
                                              componet={'span'}
                                />
                            </label>
                        </fieldset>

                        <fieldset className={s.radioList}>
                            <label className={s.radio}>
                                <Field className={s.radioInput}
                                       type='radio'
                                       name={'delivery'}
                                       value={'delivery'}
                                />
                                <span> Доставка </span>
                            </label>
                            <label className={s.radio}>
                                <Field className={s.radioInput}
                                       type='radio'
                                       name={'self'}
                                       value={'self'}
                                />
                                <span> Самовывоз </span>
                            </label>
                            <ErrorMessage className={s.error}
                                          name={'delivery'}
                                          componet={'span'}
                            />
                        </fieldset>

                        <button className={s.submit} type={'submit'} > Оформить </button>
                    </Form>

                </Formik>
            </Container>
        </section>
    )
};
