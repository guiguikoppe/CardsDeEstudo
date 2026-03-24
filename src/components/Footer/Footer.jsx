import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer">
              <div>
                    <p>© 2026 STEAM PLAYBOX.</p>
                    <p>Desenvolvido por Gustavo Bonetto</p>
                </div>
                <section className="suporte">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/564/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" alt="Ícone do WhatsApp" />
                    <a href="#suporte">Suporte</a>
                </section>
            </footer>
        </>
    );
}

export default Footer;