import React from 'react';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'login'
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const db = getFirestore();

    // Verificar se o usuário está cadastrado no Firebase
    const q = query(collection(db, 'login'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Usuário está cadastrado, verificar a senha
      const userData = querySnapshot.docs[0].data();
      if (userData.password === password) {
        console.log('Usuário autenticado');
        // Redirecionar para a página principal ou executar outras ações necessárias
      } else {
        console.log('Senha incorreta');
      }
    } else {
      console.log('Usuário não cadastrado');
    }
  };

  handleRegister = async (event) => {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const db = getFirestore();

    // Verificar se o usuário já está cadastrado no Firebase
    const q = query(collection(db, 'login'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Usuário não está cadastrado, salvar os dados no Firebase
      try {
        const docRef = await addDoc(collection(db, 'login'), {
          email: email,
          password: password
        });
        console.log('Usuário cadastrado com ID:', docRef.id);
      } catch (error) {
        console.log('Erro ao cadastrar o usuário:', error);
      }
    } else {
      // Usuário já está cadastrado
      console.log('Usuário já cadastrado');
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center mx-2 my-5 py-5">
          <div className="col-md-6 m-5 p-5 border rounded border-success-subtle">
            <ul className="nav nav-pills mb-3 text-center justify-content-between">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => this.handleTabChange('login')}
                >
                  Entre na sua conta
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => this.handleTabChange('register')}
                >
                  Registre-se
                </button>
              </li>
            </ul>
            <div className="tab-content">
              {activeTab === 'login' && (
                <div className="tab-pane fade show active">
                  <h3 className='mb-4'>Entrar</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">E-mail:</label>
                      <input type="email" className="form-control border-success-subtle" id="loginEmail" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">Senha:</label>
                      <input type="password" className="form-control border-success-subtle" id="loginPassword" />
                    </div>
                    <button type="submit" className="btn btn-success">Enviar</button>
                  </form>
                </div>
              )}
              {activeTab === 'register' && (
                <div className="tab-pane fade show active">
                  <h3 className='mb-4'>Cadastrar</h3>
                  <form onSubmit={this.handleRegister}>
                    <div className="mb-3">
                      <label htmlFor="registerEmail" className="form-label">E-mail:</label>
                      <input type="email" className="form-control border-success-subtle" id="registerEmail" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="registerPassword" className="form-label">Senha:</label>
                      <input type="password" className="form-control border-success-subtle" id="registerPassword" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirme a Senha:</label>
                      <input type="password" className="form-control border-success-subtle" id="confirmPassword" />
                    </div>
                    <button type="submit" className="btn btn-success">Enviar</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
