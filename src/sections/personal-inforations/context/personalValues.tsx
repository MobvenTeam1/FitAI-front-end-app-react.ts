export const selectType = {
  0: "Single Select",
  1: "Multi Select",
  2: "Input",
  3: "Date",
};

export interface PersonalValue {
  step: number;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  selectType: number;
  options?: PersonalValueOptions[];
}

export type PersonalValueOptions = {
  value: string;
  label: string;
};

const gender: PersonalValue = {
  step: 0,
  name: "gender",
  label: "Cinsiyetiniz nedir?",
  selectType: 0,
  options: [
    { value: "1", label: "Erkek" },
    { value: "2", label: "Kadın" },
    { value: "3", label: "Diğer" },
  ],
};

const size: PersonalValue = {
  step: 1,
  name: "size",
  label: "Boyunuz kaç?",
  selectType: 2,
  placeholder: "Lütfen boyunuzu giriniz",
  type: "number",
};

const weight: PersonalValue = {
  step: 2,
  name: "weight",
  label: "Mevcut kilonuz kaç?",
  selectType: 2,
  placeholder: "Lütfen kilonuzu giriniz",
  type: "number",
};

const age: PersonalValue = {
  step: 3,
  name: "age",
  label: "Yaş",
  selectType: 2,
  placeholder: "Lütfen yaşınızı giriniz",
  type: "number",
};

const goal: PersonalValue = {
  step: 4,
  name: "goal",
  label: "Hedefleriniz nelerdir?",
  selectType: 0,
  options: [
    { value: "1", label: "Kilo Kaybı" },
    { value: "2", label: "Kas Alma" },
    { value: "3", label: "Kas Yapma" },
    { value: "4", label: "Kalori Kontrolü" },
  ],
};

const activity: PersonalValue = {
  step: 5,
  name: "activity",
  label: "Bu uygulamada hangi planları uygulamak istersiniz?",
  selectType: 1,
  options: [
    { value: "1", label: "Hepsi" },
    { value: "2", label: "Beslenme Planı Oluşturma" },
    { value: "3", label: "Antreman Planı Oluşturma" },
    { value: "4", label: "Kalori Kontrolü" },
    { value: "5", label: "Aralıklı Oruç" },
    { value: "6", label: "Su Takibi" },
  ],
};

export const PersonalValues: PersonalValue[] = [
  gender,
  size,
  weight,
  age,
  goal,
  activity,
];
