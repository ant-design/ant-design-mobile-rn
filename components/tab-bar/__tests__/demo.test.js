import rnDemoTest from '../../../tests/shared/demoTest';
import SafeAreaView from '../__mocks__/react-native-safe-area-view';

jest.mock('react-native-safe-area-view', () => SafeAreaView);

rnDemoTest('tab-bar');
