import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { cartItems, clear, createOrder } = useCartContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm();
  const selectedPaymentMethod = watch('paymentMethod');

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const orderData = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
      items: cartItems,
      total: calculateTotal(cartItems),
    };

    const orderId = await createOrder(orderData);

    if (orderId) {
      Swal.fire({
        title: 'Pagamento realizado com sucesso!',
        text: `Seu pedido foi criado com sucesso. ID do pedido: ${orderId}`,
        icon: 'success',
      }).then(() => {
        clear();
        // Redirecionar para a página de confirmação, por exemplo
      });
    } else {
      Swal.fire({
        title: 'Erro',
        text: 'Ocorreu um erro ao processar o pagamento.',
        icon: 'error',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container">
      <h1 className="text-center py-3 text-success">Checkout</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <h2>Seu Carrinho</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item.pictureUrl} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text fw-semibold">Preço: <span className="text-success"> R$ {item.price}</span></p>
                    <p className="card-text fw-semibold">Quantidade: <span className="text-success">{item.quantity}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4 className="fw-semibold mt-3">Total: <span className="text-success">R${calculateTotal(cartItems)}</span></h4>
          <hr />
        </div>

        <div className="col-md-6">
          <h2>Informações do Comprador</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Nome é necessário.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefone:
              </label>
              <input
                type="text"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <div className="invalid-feedback">Telefone é necessário.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <div className="invalid-feedback">E-mail é necessário.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmEmail" className="form-label">
                Confirme o E-mail:
              </label>
              <input
                type="email"
                className={`form-control ${errors.confirmEmail ? 'is-invalid' : ''}`}
                id="confirmEmail"
                {...register('confirmEmail', {
                  required: true,
                  validate: (value) => value === getValues('email'),
                })}
              />
              {errors.confirmEmail && (
                <div className="invalid-feedback">E-mail precisa ser igual.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" {...register('address', { required: true })} />
              {errors.address && (
                <div className="invalid-feedback">
                  Por favor, coloque seu endereço.
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address2" className="form-label">
                Complemento <span className="text-muted">(Opcional)</span>
              </label>
              <input type="text" className="form-control" {...register('address2')} />
            </div>

            <div className="row mb-3">
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  País
                </label>
                <select className="form-select" {...register('country', { required: true })}>
                  <option value="Brasil">Brasil</option>
                </select>
                {errors.country && (
                  <div className="invalid-feedback">Por favor escolha um País válido.</div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  Estado
                </label>
                <select className="form-select" {...register('state', { required: true })}>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
                {errors.state && (
                  <div className="invalid-feedback">Por favor escolha um Estado válido.</div>
                )}
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  CEP
                </label>
                <input type="text" className="form-control" {...register('zip', { required: true })} />
                {errors.zip && (
                  <div className="invalid-feedback">CEP necessário.</div>
                )}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <h2>Pagamento</h2>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    {...register('paymentMethod', { required: true })}
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Cartão de Crédito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    {...register('paymentMethod', { required: true })}
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Débito Online
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    {...register('paymentMethod', { required: true })}
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    Pix
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="boleto"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    {...register('paymentMethod', { required: true })}
                  />
                  <label className="form-check-label" htmlFor="boleto">
                    Boleto
                  </label>
                </div>
              </div>
              <div className="row gy-3 border rounded mt-4 pb-3" id="CheckCard">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Nome no Cartão
                  </label>
                  <input type="text" className="form-control" id="cc-name" {...register('ccName', { required: selectedPaymentMethod === 'credit' })} />
                  {selectedPaymentMethod === 'credit' && errors.ccName && (
                    <div className="invalid-feedback">Por favor, insira o nome no cartão.</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Número do Cartão de Crédito
                  </label>
                  <input type="text" className="form-control" id="cc-number" {...register('ccNumber', { required: selectedPaymentMethod === 'credit' })} />
                  {selectedPaymentMethod === 'credit' && errors.ccNumber && (
                    <div className="invalid-feedback">Por favor, insira o número do cartão.</div>
                  )}
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Data de Expiração
                  </label>
                  <input type="text" className="form-control" id="cc-expiration" {...register('ccExpiration', { required: selectedPaymentMethod === 'credit' })} />
                  {selectedPaymentMethod === 'credit' && errors.ccExpiration && (
                    <div className="invalid-feedback">Por favor, insira a data de expiração.</div>
                  )}
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input type="text" className="form-control" id="cc-cvv" {...register('ccCvv', { required: selectedPaymentMethod === 'credit' })} />
                  {selectedPaymentMethod === 'credit' && errors.ccCvv && (
                    <div className="invalid-feedback">Por favor, insira o código de segurança.</div>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-success btn-lg" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Finalizar Pedido'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;