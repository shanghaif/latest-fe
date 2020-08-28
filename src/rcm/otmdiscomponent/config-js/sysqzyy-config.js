// 险种类型
export const insuranceType = [
  {
    id: '310',
    name: '医疗'
  },
  {
    id: '410',
    name: '工伤'
  },
  {
    id: '510',
    name: '生育'
  }
]
// 医疗待遇类别
export const medicalType = {
  '11': '在职',
  '21': '退休',
  '31': '离休',
  '32': '伤残军人在职',
  '33': '伤残军人退休',
  '41': '成年居民',
  '42': '未成年居民',
  '50': '新生儿',
  '51': '学龄前儿童',
  '52': '中小学生',
  '53': '大中专学生',
  '54': '未成年人',
  '55': '成年人',
  '56': '城镇老年人',
  '99': '所有类别',
  '57': '扶贫新生儿',
  '58': '扶贫残疾人',
  '59': '扶贫优抚人员',
  '60': '扶贫低保人员',
  '61': '扶贫未成年人',
  '62': '扶贫成年人',
  '63': '扶贫城镇老年人',
  '64': '事业工勤',
}

// 医疗人员类别
export const personType = {
  '11': '在职',
  '21': '退休',
  '31': '离休',
}
// 所属系统标识
export const belongSys = {
  '0': '核三',
  '1': '省直职工',
  '3': '省大金保',
  '5': '省居保',
  '2': '海口医保',
  '7': '陵水城乡',
  '9': '异地系统（外省人员）',
}
// 参保类别
export const medicalCategory = {
  '101': '城镇职工',
  '102': '灵活就业',
  '103': '失业人员',
  '200': '居民',
  '900': '异地参保',
}
// 基金类别
export const fundType = {
  '23101': '现金支出',
  '23102': '基本医疗账户支出',
  '23103': '基本医疗统筹支出',
  '23303': '公务员补助支出',
  '23503': '离休统筹支出',
  '23603': '伤残补助支出',
  '24103': '工伤基金支出',
  '25103': '生育基金支出',
}
// 居民标识
export const residentMark = {
  '01': '成年居民',
  '02': '学生',
  '03': '儿童',
  '04': '老年居民',
  '05': '大学生',
}
// 统筹区号
export const Areas = {
  '469900': '省直',
  '460199': '海口市',
  '460299': '三亚市',
  '462099': '洋浦',
  '469001': '五指山市',
  '469002': '琼海市',
  '469003': '儋州市',
  '469005': '文昌市',
  '469006': '万宁市',
  '469007': '东方市',
  '469021': '定安县',
  '469022': '屯昌县',
  '469023': '澄迈县',
  '469024': '临高县',
  '469025': '白沙县',
  '469026': '昌江县',
  '469027': '乐东县',
  '469028': '陵水县',
  '469029': '保亭县',
  '469030': '琼中县',
  '469031': '三沙市',
}
// 人员身份
export const personIdentity = {
  '11': '国家公务员',
  '12': '参照公务员管理人员',
  '13': '专业技术人员',
  '17': '职员',
  '21': '企业管理人员',
  '24': '工人',
  '27': '农民',
  '31': '学生',
  '37': '现役军人',
  '51': '自由职业者',
  '54': '个体经营者',
  '70': '无业人员',
  '80': '退（离）休人员',
  '90': '其他',
}
// 参保状态
export const medicalStatus = {
  '0': '未参保',
  '1': '参保缴费',
  '2': '暂停参保',
  '3': '终止参保',
}
// 医疗类别
export const treatType = [
  // { id: '11', name: '普通门诊' },
  // { id: '13', name: '门诊慢性病' },
  // { id: '14', name: '急诊抢救' },
  // { id: '16', name: '异地特定病种门诊' },
  { id: '21', name: '普通住院' },
  { id: '22', name: '日间病床' },
  { id: '23', name: '转省外住院' },
  { id: '24', name: '精神病住院' },
  { id: '25', name: '异地就医' },
  { id: '26', name: '单病种' },
  { id: '61', name: '产前检查' },
  { id: '62', name: '计划生育手术' },
  { id: '63', name: '生育定额住院' },
  { id: '64', name: '生育普通住院' },
  { id: '81', name: '工伤普通门诊' },
  { id: '84', name: '工伤普通住院' },
  { id: '88', name: '工伤体检' }
]
// 出院原因
export const outReason = [
  { id: '1', name: '治愈' },
  { id: '2', name: '好转' },
  { id: '3', name: '未治愈' },
  { id: '4', name: '死亡' },
  { id: '9', name: '其它' }
]
// 工伤类别
export const injuryType = [{
  id: '01', name: '工伤医疗'
},
{
  id: '02', name: '工伤康复'
}]
// 收费类别
export const chargeType = [
  { id: '11', name: '西药' },
  { id: '12', name: '中成药' },
  { id: '13', name: '中草药' },
  { id: '21', name: '检查费' },
  { id: '22', name: '特殊检查费' },
  { id: '23', name: '输氧费' },
  { id: '24', name: '手术费' },
  { id: '25', name: '化验费' },
  { id: '26', name: '输血费' },
  { id: '27', name: '诊查费' },
  { id: '31', name: '治疗费' },
  { id: '32', name: '特殊治疗费' },
  { id: '33', name: '护理费' },
  { id: '34', name: '床位费' },
  { id: '35', name: '取暖费' },
  { id: '41', name: '医疗服务费' },
  { id: '42', name: '麻醉费' },
  { id: '43', name: '安装器官' },
  { id: '44', name: '产前检查费' },
  { id: '45', name: '新生儿费' },
  { id: '46', name: '理疗费' },
  { id: '47', name: '高质耗材' },
  { id: '48', name: '放射费' },
  { id: '49', name: '核医费' },
  { id: '50', name: '注射费' },
  { id: '51', name: '病理费' },
  { id: '52', name: '抢救费' },
  { id: '91', name: '其他费用  ' },
  { id: '92', name: '挂号费' },
  { id: '94', name: '材料费' },
]
// 生育费用类别
export const birthFeeType = [
  { id: '01', name: '产前检查' },
  { id: '02', name: '生育分娩' },
  { id: '03', name: '计划生育' },
  { id: '04', name: '生育疾病' },
]