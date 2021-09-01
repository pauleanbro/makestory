import { Button, InputGroup } from 'react-bootstrap'
import { Form } from '@unform/web'
import Input from './Input'

export const Menu = (props) => {

    function handleSubmitUrl(data) {
        if (data.url.length === 0) {
            props.setUrl('https://static.vecteezy.com/ti/vetor-gratis/p1/2486289-gradiente-fundo-instagram-grátis-vetor.jpg')
            return;
        }

        props.setUrl(data.url)
    }

    function handleSubmitName(data) {
        if (data.name.length === 0) {
            props.setUsername('username')
            return;
        }

        props.setUsername(data.name)
    }

    function handleSubmitIcon(data) {
        if (data.icon.length === 0) {
            props.setUrlIcon('https://inflact.com/img/noavatar.png')
            return;
        }

        props.setUrlIcon(data.icon)
    }

    return (
        <div className="p-3">
            <Form
                onSubmit={handleSubmitUrl}
            >
                <InputGroup className="mb-3">
                    <Input
                        type="url"
                        className="form-control"
                        name="url"
                        placeholder="URL do fundo"
                    />
                    <Button
                        type="submit"
                        variant="outline-secondary"
                        id="input-image"
                    >
                        Set
                    </Button>
                </InputGroup>
            </Form>
            <Form
                onSubmit={handleSubmitIcon}
            >
                <InputGroup className="mb-3">
                    <Input
                        type="text"
                        className="form-control"
                        name="icon"
                        placeholder="URL do icon"
                    />
                    <Button
                        type="submit"
                        variant="outline-secondary"
                        id="input-icon"
                    >
                        Set
                    </Button>
                </InputGroup>
            </Form>
            <Form
                onSubmit={handleSubmitName}
            >
                <InputGroup className="mb-3">
                    <Input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nome do usuário"
                    />
                    <Button
                        type="submit"
                        variant="outline-secondary"
                        id="input-name"
                    >
                        Set
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}
