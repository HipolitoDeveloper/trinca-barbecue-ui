import {extendTheme} from '@chakra-ui/react';
import {InputOverride} from "@styles/InputOverride";
import {CheckboxOverride} from "@styles/CheckboxOverride";

const Colors = {
    yellow: '#FFD836',
    darkYellow: '#998220',
    redPastel: '#E86363',

    debug1: '#0220ff',
    debug2: '#ff8001',
    debug3: '#ff0000',
    debug4: '#0ef702',
    debug5: '#9d06e8',
    debug6: '#e806af',
    avatar: '#3490FA',
};

const Fonts = {
    body: 'Raleway',
}

const Styles = {
    global: {
        body: {
            fontFamily: "body"
        }
    }
}


export const theme = extendTheme({
    fonts: Fonts,
    styles: Styles,
    semanticTokens: {
        colors: Colors,
    },
    components: {
        Input: InputOverride,
        Checkbox: CheckboxOverride
    }
});
